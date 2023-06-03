function Gallery(props) {
    return (
        <section class="bakery">
            <div class="menu">
                <h2>{props.menu}</h2>
            </div>
            <div className="container rows">
                <h2>{props.sweets}</h2>
                <div className="row">
                    {props.images.map(image => (
                        <div class="column one" key={image.id}>
                            <div className="card">
                                <img className="gallery-image" src={image.image} />
                                <div class="cake">
                                    <p>{image.sweetName}
                                    </p>
                                    <p class="price"> {image.price}</p>
                                </div>
                                <p className="gallery-description">{image.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery