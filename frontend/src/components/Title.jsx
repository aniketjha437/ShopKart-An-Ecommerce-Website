const Title = (props) => {
  return (
    <div className="flex justify-center ">
      <div className=" inline-flex items-center  gap-2 mb-3">
        <p className="text-gray-500">
          {props.text1}{" "}
          <span className="text-gray-500 font-medium">{props.text2}</span>
        </p>
        <p className="w-8 h-2 sm:w-12 sm:h-[2px] bg-gray-700  "></p>
      </div>
    </div>
  );
};

export default Title;
