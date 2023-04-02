import { useState } from "react";
import Input from "@/components/Input";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [name, SetName] = useState('');
    const [password, SetPassword] = useState('');

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover" >
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Entrar
                        </h2>
                        <div className="flex flex-col gap-4">
                        <Input
                            label="Username"
                            onChange={(ev: any) => SetName(ev.target.value)}
                            id="name"
                            type="email"
                            value={name}
                            />
                            <Input
                            label="Email"
                            onChange={(ev: any) => setEmail(ev.target.value)}
                            id="Email"
                            type="email"
                            value={email}
                            />
                            <Input
                            label="Senha"
                            onChange={(ev: any) => SetPassword(ev.target.value)}
                            id="senha"
                            type="password"
                            value={password}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
