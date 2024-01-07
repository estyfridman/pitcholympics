import { Locale } from '@/i18n.config';
import { Link, Text } from '@core';


type Props = {
    params: {
        lang: Locale;
    };
};


const Page = ({ params }: Props) => {
    const { lang } = params;

    return (
        <div>
            <h1>Filling Page</h1>
            <div>

            <div className='h-full w-1/4  flex'>
                    <Link label='Back' url={`/${lang}/polls`} />
                </div>
            </div>
            <p> </p>
        </div>
    );
};

export default Page;
