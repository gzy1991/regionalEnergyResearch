from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import json
import regionalEnergyResearch.settings as Setting
import os
import os.path
import xlrd
import xlwt
import numpy as np
import Tool.ExcelTool as ExcelTool
import Tool.ProvinceTool as ProvinceTool
from django.http import HttpResponse,JsonResponse


#返回页面  layuiAdmin
def getIndexPage(request):

    return  render(request, 'index.html' )
    # return  render(request, 'index.html' )

# 返回某一特定页面  3层结构
def getPage1(request,path1,path2,path3,name):
    return render(request, path1+'/'+path2+'/'+path3+'/'+name)

# 返回某一特定页面  2层结构
def getPage2(request,path1,path2,name):
    return render(request, path1+'/'+path2+'/'+name)


# 返回某一特定页面  1层结构
def getPage3(request,path1,name):
    return render(request, path1+'/'+name)



#获取首页页面数据
def getIndexDate(request):
    # Setting.FILR_DIR["INDEX_DIR"]  #文件路径
    files = ExcelTool.listExcelFile(Setting.FILR_DIR["INDEX_DIR"])
    print (files)
    resultList={}
    # 获取省份名列表，包括 ： 中文名、英文名、纬度、经度
    provincesInfo = ExcelTool.getArrayBySheetName(os.path.join(Setting.FILR_DIR["COMMON_DIR"],
                                                               "Province.xlsx"), "province")
    #provincesInfoList = transform(provincesInfo,31,6)
    resultList["province"] = ProvinceTool.getProvinceInfoChina()

    for file in files:  # 遍历每个excel文件
        try:
            result = {}  # 单个excel文件处理后的结果
            fullFileName = file.split("\\")[len(file.split("\\")) - 1]
            fileName = fullFileName.split(".")[0]
            if(fileName == "1"): #处理1.xlsx
                print("1.xlsx")
                yearNum= 0 # 有几年
                yearList=[]  #年份
                excelData = xlrd.open_workbook(file, "rb")  # excel的全部数据
                sheetNameList = excelData.sheet_names()  # 获取此文件的全部sheet名
                # if ('year' not in sheetNameList):
                #     # 如果不存item，那么excel错误，
                #     print("Error: 文件有问题: " + file)
                #     break

                # 读取 year， 获得年份
                sheetData = ExcelTool.getNpArrayFromSheet(excelData, "year", "name", 0, 6)  # 只有6列
                yearNum = sheetData.shape[0]  #有几年
                for i in range(yearNum) :
                    yearList.append(str(sheetData[i][0]).split(".")[0])
                resultList["year"]=yearList
                yearNum= len(yearList)  #年数
                # 处理 “POP” 人口
                sheetDataPOP = ExcelTool.getNpArrayFromSheet(excelData, "POP", "name", 31, 0)  #
                sheetDataPOPList = ExcelTool.nArrayToList(sheetDataPOP,31,yearNum)
                resultList["pop"]=sheetDataPOPList
                # 处理GDP
                sheetDataGDP = ExcelTool.getNpArrayFromSheet(excelData, "GDP", "name", 31, 0)  #
                sheetDataGDPList = ExcelTool.nArrayToList(sheetDataGDP,31,yearNum)
                resultList["gdp"] = sheetDataGDPList
                # 处理Energy
                sheetDataenergy = ExcelTool.getNpArrayFromSheet(excelData, "energy", "name", 31, 0)  #
                sheetDataenergyList = ExcelTool.nArrayToList(sheetDataenergy,31,yearNum)
                resultList["energy"] = sheetDataenergyList

                print("end 1.xlsx")
            elif(fileName=="2"):
                print("2.xlsx")
        except BaseException:
            print("Error: 文件有问题: " + file)
            import traceback
            traceback.print_exc()
    resultListJson=json.dumps(resultList)
    return HttpResponse(resultListJson)

