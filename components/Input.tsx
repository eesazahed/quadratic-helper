import { NextPage } from "next";

interface Props {
  parentData: number | undefined;
  updateParent: Function;
  label: string;
  placeholder: string;
  type: string;
}

const Input: NextPage<Props> = ({
  label,
  placeholder,
  parentData,
  updateParent,
  type,
}) => {
  return (
    <div className="mt-7 flex items-center">
      <label className="mr-2" htmlFor="input">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-none dark:caret-white dark:text-white"
        value={parentData}
        onChange={(e) => updateParent(e.target.value)}
      />
    </div>
  );
};

export default Input;
