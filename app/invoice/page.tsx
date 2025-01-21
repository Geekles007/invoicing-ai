import Image from "next/image";
import KeyValueViewer from "@/components/KeyValueViewer";
import CompanyInfos from "@/components/CompanyInfos";
import Link from "next/link";
import DataTable from "@/components/datatable";
import { headers, invoices } from "@/lib/constants";
import { TableCell, TableFooter, TableRow } from "@/components/ui/table";
import NumberFlow from "@number-flow/react";

const Invoice = () => {
  const total = invoices.reduce((sum, item) => {
    return sum + (typeof item.totalAmount === "number" ? item.totalAmount : 0);
  }, 0);

  return (
    <div className="w-screen">
      <div className="max-w-screen-md mx-auto h-screen bg-white relative">
        <div className="header h-24 relative pl-4 flex items-center justify-between">
          <div className="bg-black p-2 w-14 h-full flex items-end justify-center pb-4">
            <Image alt={""} src={"logo.svg"} width={20} height={20} />
          </div>
          <div className=" right-0 top-8 flex items-center gap-8">
            <div className="flex flex-col gap-2">
              <KeyValueViewer title={"Invoice:"} value={"#001"} />
              <KeyValueViewer title={"Date:"} value={"21/01/2025"} />
            </div>
            <div className="invoice  px-6 py-4 bg-black text-white">
              <h1 className="text-center text-2xl font-bold">Facture</h1>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="compagnies-infos w-full mt-8 flex justify-between">
            <CompanyInfos
              title={"Destinataire:"}
              list={[["Nom de la compagnie", "MatriCx Consulting SARL"]]}
            />
            <CompanyInfos
              title={"Emetteur:"}
              orientation={"right"}
              list={[
                ["Nom de la compagnie", "Ibird Agency"],
                ["Adresse", "Logpom Carrefour Bassong"],
                [
                  "Téléphone",
                  <Link key={"email"} href={"tel:652475952"} target={"_blank"}>
                    +237 6 52 47 59 52
                  </Link>,
                ],
                [
                  "Email",
                  <Link
                    key={"email"}
                    href={"mailto:tondjilee@gmail.com"}
                    target={"_blank"}
                  >
                    Tondjilee@gmail.com
                  </Link>,
                ],
              ]}
            />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <DataTable
              list={invoices}
              headers={headers}
              rowId={(item) => {
                return item.invoice;
              }}
              footer={
                <TableFooter>
                  <TableRow className={"bg-black"}>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right ">
                      <NumberFlow
                        value={total}
                        className={"font-bold text-2xl text-yellow-500"}
                      />
                    </TableCell>
                  </TableRow>
                </TableFooter>
              }
            />
            <div className="">
              <h1 className="text-lg font-bold text-black">
                Conditions de paiement
              </h1>
              <ul className={"flex flex-col gap-2 mt-2"}>
                <li>
                  <span className="text-black text-sm">
                    2 semaine qui ne seront pas payées mais ceux ci nous
                    permettront de savoir si les parties sont compatibles
                  </span>
                </li>
                <li>
                  <span className="text-black text-sm">
                    40% pour le démarrage du projet
                  </span>
                </li>
                <li>
                  <span className="text-black text-sm">
                    30% comme deuxième tranche
                  </span>
                </li>
                <li>
                  <span className="text-black text-sm">
                    30% restants à la fin du projet
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center mt-12 font-bold text-black text-sm">{`Let's make great things together.`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
