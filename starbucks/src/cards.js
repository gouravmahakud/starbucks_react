
function Cards(props) {
    return (
        <div className="flex pb-8 lg:max-w-md">
            <div className="w-32 pr-4 h-36">
                <img style={{minWidth: '111px', minHeight: '156.39px'}} src={props.src} alt=""/>
            </div>
            <div>
                <h1 className="text-xl font-bold">{props.data}</h1>
                <p className="pt-4">{props.desc} {props.children} {props.rest}</p>
            </div>
        </div>
    );
}

export default Cards;