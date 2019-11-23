#coding:utf-8
#!/usr/bin/python
import Tool.ExcelTool as ExcelTool
import regionalEnergyResearch.settings as Setting
import os
import os.path
#获取省份信息

# 获取省份名列表，包括 ： 中文名、英文名、纬度、经度
# 获取31个省份名列字典，key是中文名,
def getProvinceInfoChina():
    provincesInfo = ExcelTool.getArrayBySheetName(os.path.join(Setting.FILR_DIR["COMMON_DIR"],"Province.xlsx"), "province")
    provincesInfoList = ExcelTool.nArrayToList(provincesInfo,31,6)
    result={}
    for i in range(31):
        proChineseName = provincesInfoList[i][1]
        result[proChineseName] = provincesInfoList[i]
    return result

# 获取31个省份名列字典，key是英文名,
def getProvinceInfoEng():
    provincesInfo = ExcelTool.getArrayBySheetName(os.path.join(Setting.FILR_DIR["COMMON_DIR"], "Province.xlsx"),"province")
    provincesInfoList = ExcelTool.nArrayToList(provincesInfo, 31, 6)
    result = {}
    for i in range(31):
        proEnglishName = provincesInfoList[i][2]
        result[proEnglishName] = provincesInfoList[i]
    return result

