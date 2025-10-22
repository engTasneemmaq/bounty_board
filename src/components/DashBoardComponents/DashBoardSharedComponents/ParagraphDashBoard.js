/** @format */

export const ParagraphDashBoard = ({ text, withSpan, textSpan }) => {
  return (
    <p className='text-[#767F8C] text-[14px] font-normal'>
      {" "}
      {text} {withSpan ? <span className='ml-[5px]'>{textSpan} </span> : ""}{" "}
    </p>
  );
};
