import axios from "axios"
import { useQuery } from "react-query"

export function useCurrentAddress() {
  return useQuery('address', async () => {
    const { data } = await axios.get(
      import.meta.env.VITE_ADDRESS_API
    )
    return data
  })
}
