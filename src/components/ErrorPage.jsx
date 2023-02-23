import { useRouteError } from "react-router-dom";
import { useStateContext } from "../context/Context"

export default function ErrorPage() {
    const { currentColor } = useStateContext()
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{ color: currentColor }} id="error-page" className="h-screen w-screen bg-main-dark-bg flex items-center justify-center flex-col gap-4">
            <h1 className="text-4xl font-semibold text-red-500">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="mt-10 text-xl">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}