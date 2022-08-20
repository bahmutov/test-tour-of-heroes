import { HttpClientModule } from '@angular/common/http';
import { TwainComponent } from './../twain/twain.component';
import { TwainService } from '../twain/twain.service';
import {AboutComponent} from './about.component'

describe('About', () => {
  it('mounts', () => {
    cy.intercept({
      method: 'GET',
      pathname: '/api/quotes/1'
    }, {
      statusCode: 200,
      body: {
        id: 1,
        quote: 'This is a test quote'
      }
    })
    cy.mount(AboutComponent, {
      imports: [HttpClientModule],
      declarations: [TwainComponent],
      providers: [TwainService]
    })
  })
})
