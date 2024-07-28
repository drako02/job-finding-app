import close from "../../assets/close.svg"

type Props = {
    children?: React.ReactNode;
}

const TitleBar = ({children}:Props) => {
    return (
        <div className="w-[100%] h-[73px] flex justify-between items-center px-[6.6%] text-[18px] font-bold leading-[140%]">
            {children}

            <div className=" w-[24px] h-[24px] flex justify-center items-center">
                <img alt="" src={close}/>                
            </div>

        </div>
    )
};

export default TitleBar;