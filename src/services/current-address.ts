import axios from "axios"

export async function getCurrentAddress(cep: string) {
    const { data } = await axios.get(
        `${import.meta.env.VITE_CEP_API}/${cep}/json`
      )
      return data
}
