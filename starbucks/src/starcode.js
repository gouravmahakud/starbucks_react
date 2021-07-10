function StarCodes() {
    return (
        <div className="flex md:items-center mb-28 md:justify-center">
        <div className="inline px-4 mt-16 md:mx-10" >
            <h1 className="pb-4 text-2xl font-medium text-left md:text-4xl">Star Codes</h1>
            <p className="pb-4 font-medium">Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>
            <div className="">
                <form action="" className="mb-8">
                    <div className="py-3 pr-2">
                        <div className="px-4 py-3 border-2 border-black rounded-lg ">
                            <input className="" size="" type="text" placeholder="Enter your Star Code" id="star"/>
                        </div>
                    </div>
                    <div className="flex justify-end pr-2">
                        <input className="px-4 py-1 font-medium border-2 border-black rounded-full" type="submit" value="Submit" placeholder="Submit"/>
                    </div>    
                </form>
                <div>
                    <p className="font-medium">Have a receipt but don't have a code?</p>
                    <p className="font-medium">Go to <a href="https://www.google.com" className="underline text-primary-300"> starbucks-stars.com</a> to upload your receipt and collect your Stars.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default StarCodes;