import noImage from "../assets/no-image-placeholder.webp"

const getCroppedImageUrl = (url: string) => {
	if (!url) return noImage;
	const croppedImageUrl = url.replace("media/", "media/crop/600/400/");
	return croppedImageUrl;
};

export default getCroppedImageUrl;