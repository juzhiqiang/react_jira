/*
 * @Description: file content
 * @Author: 琚志强 1020814597
 * @Date: 2021-04-28 11:41:43
 * @LastEditors: 琚志强
 * @LastEditTime: 2021-04-28 11:57:35
 */

// 布尔值转换
export const isFalsy = (val) => val === 0 ? false : !val;

// 清除空值
export const cleanObject = (obj) => {
    // 简单深拷贝
    const result = {
        ...obj
    };

    Object.keys(result).forEach(key => {
        const value = result[key];
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result;
}