import ContentContainer from './_components/ContentContainer';
import HeaderContainer from './_components/HeaderContainer';

const page = () => {
    const backgroundColorStyle = {
        backgroundColor: 'rgb(0, 9, 19)',
    };
    return (
        <div className='text-white' style={backgroundColorStyle}>
            {/*get from the params the patch note version */}
            <HeaderContainer />
            <ContentContainer />
        </div>
    );
};

export default page;
