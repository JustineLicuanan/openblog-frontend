import Link from 'next/link';
import classes from './style.module.scss';

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={`${classes.container} ${classes.flex}`}>
				<Link href='/'>
					<a>
						<h1>{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
