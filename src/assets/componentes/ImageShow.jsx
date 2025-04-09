const ImageShow = ({image}) => {
    return(
        <div>
            <img src= {image.url.small} alt={image.alt_description}/>
        </div>
    )
}

export default ImageShow