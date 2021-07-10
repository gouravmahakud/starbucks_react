
function RoundedLink(props){
    const themeClasses = 
    props.theme === "white" ? "text-white border-white" : "text-black border-black"; 
    
    return(
        <button className={"flex-shrink-0 py-2 px-4 border-2 rounded-full font-bold text-base tracking-wide " + themeClasses} href={props.linkUrl}>
            {props.linkData}
        </button>
    );
}
export default RoundedLink;