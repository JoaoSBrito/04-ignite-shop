import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return <h1>Pagina de Produto {JSON.stringify(query)}</h1>;
}
