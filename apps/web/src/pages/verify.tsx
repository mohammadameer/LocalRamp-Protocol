import TextInput from 'components/form/TextInput';
import { NextPage } from 'next';

const Verify: NextPage = () => {
  const verify = () => {};

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex flex-col gap-4 md:w-auto md:min-w-[35%]">
        <TextInput label="ID Number / Passport Number" />
        <TextInput label="Email" />
        <TextInput label="Phone Number" />
        <TextInput label="Address" />
        <button
          type="button"
          className="cursor-pointer rounded-2xl bg-emerald-500 p-4 py-2 text-xl text-white hover:scale-105 active:scale-95"
          onClick={verify}>
          Sign &
        </button>
      </div>
    </div>
  );
};
export default Verify;
