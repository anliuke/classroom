import request from '../utils/request';
import qs from 'qs'

// 获取课程列表
export function getKeChengList (data) {
    return request({
        method: 'post',
        url: '/api/school/coursesList',
        data: data
    })
}

// 获取课程内容
export function getKeChengInfo (data) {
    return request({
        method: 'post',
        url: '/api/school/coursesInfo',
        data: data
    })
}