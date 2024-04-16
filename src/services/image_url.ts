const getCroppedImageUrl = (url: string) => {
	if (!url) return '';
	const croppedImageUrl = url.replace("media/", "media/crop/600/400/");
	return croppedImageUrl;
};

export default getCroppedImageUrl;