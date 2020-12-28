import { parseISO, format } from 'date-fns';

interface Props {
	dateString: string;
}

const Date = ({ dateString }: Props) => {
	const date = parseISO(dateString);
	return <time>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
