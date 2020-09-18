import request from '../utils/request';
import qs from 'qs'

// 获取教师详情
export function getTeacherInfo (data) {
    return request({
        method: 'post',
        url: '/api/school/teacherInfo',
        data: data
    })
}