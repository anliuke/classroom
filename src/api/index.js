import request from '../utils/request';
import qs from 'qs'

// 获取更省课堂详情数据
export function getKeTangList () {
    return request({
        method: 'post',
        url: '/api/school/index',
    })
}