"use strict";

//이벤트 적용 대상 함수
export const EVENT_SUBJECT = Object.freeze({
	minValue: 10000,
    maxOrderMenu: 20,
});

// 일요일 ~ 목요일 할인
export const WEEKDAY_DISCOUNT = Object.freeze({
	dessert: 2023,
});

// 금요일 ~ 일요일 할인 
export const WEEKEND_DISCOUNT = Object.freeze({
	main: 2023,
});

// 이벤트 뱃지
export const EVENT_BADGE = Object.freeze({
	star: 5000,
    tree: 10000,
    santa: 20000,
});

export const ERROR_MESSAGE = Object.freeze({
	dateRange: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해주세요.",
    orderError: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
});