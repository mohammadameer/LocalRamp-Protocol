import TextInput from 'components/form/TextInput';
import { NextPage } from 'next';

const Verify: NextPage = () => {
  const verify = () => {
    // write(data)
  };

  return (
    <div className="flex w-full flex-col items-center">
      <form
        className="flex flex-col gap-4 md:w-auto md:min-w-[35%]"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // const formData = new FormData(e.target);
          // const data = Object.fromEntries(formData.entries());
          verify();
        }}>
        <TextInput label="Name" />
        <TextInput label="ID Number / Passport Number" />
        <TextInput label="Email" />
        <TextInput label="Phone Number" />
        <button
          type="submit"
          className="cursor-pointer rounded-2xl bg-emerald-500 p-4 py-2 text-xl text-white hover:scale-105 active:scale-95">
          Sign &
        </button>
      </form>
    </div>
  );
};
export default Verify;
