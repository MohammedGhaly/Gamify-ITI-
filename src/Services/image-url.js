import noImage from "../assets/image_placeholder.jpg";

function getCroppedUrl(url, width = 600, height = 400) {
  if (!url) return noImage;
  const taregt = "media/";
  const index = url.indexOf(taregt) + taregt.length;
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
}

export default getCroppedUrl;
