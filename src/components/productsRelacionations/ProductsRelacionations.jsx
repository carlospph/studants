import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    max-width: 1140px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const TitleSection = styled.h2`
    text-align: left;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 120%;
    color: rgb(16, 16, 96);
    margin-bottom: 1rem;
`;

const Card = styled.div`
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease-in-out;
    cursor:point;

    &:hover {
        transform: translateY(-5px);
    }

    & img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`;

const BodyCard = styled.div`
    padding: .8rem 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TitleCard = styled.h4`
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 120%;
    color: rgb(16, 16, 96);
    margin-bottom: 0.5rem;
`;

const DescriptionCard = styled.p`
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 150%;
    color: #555;
    margin-bottom: 1rem;
    text-align: left;
`;

const Btn = styled.button`
    padding: .6rem 1.5rem;
    color: white;
    background: orange;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: calc(100% - 2rem);
    margin: 1rem;
    align-self: center;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: darkorange;
    }
`;

export function ProductsRelacionations() {
    return (
        <>
            <TitleSection>Produtos Relacionados</TitleSection>

            <Container>
                <Card>
                    <div>
                        <img src="https://images.unsplash.com/photo-1705096953495-8ea06879b986?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" alt="Tênis Urbano Estiloso" />
                    </div>
                    <BodyCard>
                        <TitleCard>Tênis Urbano Estiloso</TitleCard>
                        <DescriptionCard>
                            Perfeito para quem busca um visual moderno e o máximo conforto para o dia a dia na cidade.
                        </DescriptionCard>
                    </BodyCard>
                    <Btn>Comprar</Btn>
                </Card>

                <Card>
                    <div>
                        <img src="https://images.unsplash.com/photo-1704677982215-a2248af6009b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tênis de Corrida Leve" />
                    </div>
                    <BodyCard>
                        <TitleCard>Tênis de Corrida Leve</TitleCard>
                        <DescriptionCard>
                            Desenvolvido para alta performance, este tênis oferece leveza e amortecimento superior para suas corridas.
                        </DescriptionCard>
                    </BodyCard>
                    <Btn>Comprar</Btn>
                </Card>

                <Card>
                    <div>
                        <img src="https://images.unsplash.com/photo-1699198489130-2e02f3726612?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8" alt="Tênis Casual Clássico" />
                    </div>
                    <BodyCard>
                        <TitleCard>Tênis Casual Clássico</TitleCard>
                        <DescriptionCard>
                            Um ícone de estilo, ideal para combinar com qualquer look e garantir conforto em todas as ocasiões.
                        </DescriptionCard>
                    </BodyCard>
                    <Btn>Comprar</Btn>
                </Card>

                <Card>
                    <div>
                        <img src="https://images.unsplash.com/photo-1644426059269-36535c7c00fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tênis para Aventura" />
                    </div>
                    <BodyCard>
                        <TitleCard>Tênis para Aventura</TitleCard>
                        <DescriptionCard>
                            Construído para trilhas e atividades ao ar livre, oferece tração e durabilidade em qualquer terreno.
                        </DescriptionCard>
                    </BodyCard>
                    <Btn>Comprar</Btn>
                </Card>
            </Container>
        </>
    )
}
