function Extra(props) {
    return (
        <div className="flex px-4 pb-8 md:flex-col md:text-center md:max-w-md">
            <div className="pr-4 h-36">
                <img style={{width: '111px', height:'111px', minWidth: '111px', minHeight: '111px'}} src={props.src} className="mx-auto"  alt=""/>
            </div>
            <div>
                <h1 className="text-xl font-bold">{props.data}</h1>
                <p className="pt-4">{props.desc}</p>
                <button className="py-4"><a href={props.learnMore} className="underline text-primary-400">Learn more</a></button>
            </div>
        </div>
        
    );
}

export default Extra;