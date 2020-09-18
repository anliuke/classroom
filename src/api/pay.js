import request from '../utils/request';
import qs from 'qs'

// 支付接口
export function shiXunPay (data) {
    return request({
        method: 'post',
        url: '/api/school/coursesPay',
        data: data
    })
}