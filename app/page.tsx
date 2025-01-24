import Preview from "@/components/Preview";
import ProformaForm from "@/components/ProformaForm";

export default function Home() {
  return (
    <div className="w-screen grid grid-cols-2 gap-4">
      <div className={"h-screen overflow-y-scroll "}>
        <ProformaForm />
      </div>
      <div className={""}>
        <Preview />
      </div>
    </div>
  );
}
