export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export default interface Ce_blog {
	body?: string,
	datePosted?: string,
	slug?: string,
	name: string,
	c_coverPhoto?: ComplexImage,
	id: string,
}
