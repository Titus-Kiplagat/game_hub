const getCroppedImageUrl = (url: string) => {
	const croppedImageUrl = url.replace("media/", "media/crop/600/400/");
	return croppedImageUrl;
};

export default getCroppedImageUrl;