import { IImage } from "~/interface";

export const ordinalSuffix = (day: number): string => {
	const j = day % 10;
	const k = day % 100;
	if (j === 1 && k !== 11) {
		return day + "st";
	}
	if (j === 2 && k !== 12) {
		return day + "nd";
	}
	if (j === 3 && k !== 13) {
		return day + "rd";
	}
	return day + "th";
}


export const createDate = (date: Date, locale: string): string =>
	`${locale === "en" ? ordinalSuffix(date.getDate()) : date.getDate()} ${date.toLocaleString(locale, { month: "short" })} ${date.getFullYear()}`;


export const chooseImageFormat = (image: IImage | undefined) => {
	if (image === undefined) return undefined;
	if (window.innerWidth >= 1280)
		return `${import.meta.env.VITE_STRAPI_URL}${image.formats.large.url}`;
	if (window.innerWidth < 1280 && window.innerWidth >= 768)
		return `${import.meta.env.VITE_STRAPI_URL}${image.formats.medium.url}`;
	if (window.innerWidth < 768)
		return `${import.meta.env.VITE_STRAPI_URL}${image.formats.small.url}`;
};