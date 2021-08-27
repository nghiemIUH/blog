import { Home } from '../components';
import { Feature } from '../components';

export function HomeContainer() {
    return (
        <Home>
            <Feature>
                <Feature.Title>
                    Information technology knowledge sharing
                </Feature.Title>
                <Feature.SubTitle>
                    Read anywhere - Ask anytime
                </Feature.SubTitle>
            </Feature>
        </Home>
    )
}