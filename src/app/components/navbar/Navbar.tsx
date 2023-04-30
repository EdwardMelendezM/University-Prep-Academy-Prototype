'use client'

import Container from "../Container";

const Navbar = () => {
  return (
    <div className="
      fixed w-full bg-white z-10 shadow-sm
    ">
      <div className="
        py-4 border-b-[1px]
      ">
        <Container>
          <div className="
            flex flex-row items-center justify-between gap-3 md:gap-0
          ">
            <div>CICLOS</div>
            <div>MATRICULAS EN LINEA</div>
            <div>RECURSOS</div>
            <div>SEDES</div>
            <div>CONÓCENOS</div>
            <div>CONTACTO</div>
          </div>
        </Container>
      </div>

    </div>
  );
}

export default Navbar;