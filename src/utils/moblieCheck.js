export class M {

    // 检测苹果十版本
    isIphoneX = function () {
        return (/iphone/gi.test(navigator.userAgent) && (screen.height == 896 && screen.width == 414)) || (/iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375))
    }

    // 检测苹果XR
    isIPhoneXR = function () {
        return /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896;
    }

    // 检测苹果6p,7p,8p
    isIpone8plus = function () {
        return /iphone/gi.test(navigator.userAgent) && (screen.height == 736 && screen.width == 414)
    }

    // 检测苹果6,7,8
    isIphone7 = function () {
        return /iphone/gi.test(navigator.userAgent) && (screen.height == 667 && screen.width == 375)
    }

    setgoindex = function () {
        if (window.history.length <= 1) {
            console.log(window.history)
            if (location.href.indexOf('?') === -1) {
            window.location.href = location.href + '?goindex=true'
            } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
            window.location.href = location.href + '&goindex=true'
            }
        }
    }


}