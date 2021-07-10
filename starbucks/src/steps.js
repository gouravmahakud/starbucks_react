function Steps(props){
    return (
        <div className={props.parentClassProp}>
            <div className="h-12 pr-4">
                <img className="w-12 h-12 max-w-small md:mx-auto" style={{width: '48px', height:'48px', minWidth: '48px', minHeight: '48px'}} src={props.src} alt=""/>
            </div>
            <div>
                <h1 className="pt-2 text-xl font-bold md:text-center">{props.step}</h1>
                <p className="pt-4 text-xl font-semibold md:text-center">{props.desc}</p>
            </div>
        </div>
    );
}
export default Steps;