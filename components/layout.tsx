import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

const name = 'Rochak Gupta';
export const siteTitle = "Rochak Gupta";

const Layout = ({
	children,
	home
}: {
	children: React.ReactNode
	home?: boolean
}) => (
	<div className={styles.container}>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<meta
				name="description"
				content="Rochak Gupta's Personal Website"
			/>
			<meta name="og:title" content={siteTitle} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
		<header className={styles.header}>
			{home ? (
				<>
					<Image
						priority
						src="/images/profile.jpg"
						className={utilStyles.borderCircle}
						height={128}
						width={128}
						alt={name}
					/>
					<h1 className={utilStyles.heading2Xl}>{name}</h1>
				</>
			) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpg"
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
		</header>
		<main>{children}</main>
		{!home && (
			<div className={styles.backToHome}>
				<Link href="/">
					<a>← Back to home</a>
				</Link>
			</div>
		)}
	</div>
);

export default Layout;