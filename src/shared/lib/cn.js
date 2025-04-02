import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * TailwindCSS 유틸리티 클래스들을 조건부로 조합하고,
 * 중복되는 클래스는 제거하여 하나의 문자열로 반환합니다.
 *
 * @function cn
 * @param {...import('clsx').ClassValue} inputs - 조건부로 조합할 클래스 문자열/객체/배열 등
 * @returns {string} 병합된 클래스 문자열
 */
export const cn = (...inputs) => twMerge(clsx(inputs));
