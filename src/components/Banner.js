import Button from './Button';
function Banner(props) {
    let isPrimary = true;
    return (
        <section className="banner">
            <div className="overlay">
                <div className="show-modal section">
                    <div className="names">
                        <p className="name">{props.title}</p>
                    </div>
                    <div class="main">
                        <div class="names">
                            <p class="second">{props.content}</p>
                        </div>

                    </div>
                </div>
                <Button isPrimary={isPrimary} />
                <Button />        
             </div>
        </section>
    )

}
export default Banner