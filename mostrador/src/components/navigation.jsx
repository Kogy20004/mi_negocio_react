import { Link } from "react-router-dom"
import './navigation.css'

export function Navigation() {
	return (
		<div >
			<nav>
				<div>
					<Link to='/inicio'>
						<img src='./src/assets/Logo.svg' />
					</Link>
				</div>
				<div>
					<div>
						<Link to='/inicio'>Inicio</Link>
					</div>
					<div>
						<Link to='/inventario'>Inventario</Link>
					</div>
					<div>

						<Link to='/caja'>Caja</Link>
					</div>


				</div>


			</nav>
		</div>
	)

}