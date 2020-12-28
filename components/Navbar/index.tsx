import Link from 'next/link';
import classes from './style.module.scss';

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={`${classes.container} ${classes.flex}`}>
				<Link href='/'>
					<a>
						<h3 className={classes.logo}>
							{process.env.NEXT_PUBLIC_SITE_NAME}
						</h3>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
