import PropTypes from 'prop-types'; 

const Links = ({route}) => {
    return (
        <li className='md:mr-4 sm:mb-4'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
    

}
Links.propTypes = {
    route: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
};

export default Links;

 