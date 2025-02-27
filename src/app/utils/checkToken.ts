import { verifyToken } from "./verify.token";

import { redirect } from "next/navigation";

export const checkToken = async (tokenUser:string) => {
      try {
        await verifyToken(tokenUser);
        console.log('Token verificado:');
      } catch (error) {
        console.log('Erro ao verificar token:', error);
        redirect('/login')
      }
    };

