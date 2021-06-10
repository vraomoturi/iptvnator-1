import { NgxWhatsNewModule } from 'ngx-whats-new';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ElectronService } from './services/electron.service';
import { ElectronServiceStub } from './home/home.component.spec';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockModule, MockPipe } from 'ng-mocks';

jest.mock('custom-electron-titlebar', () => {
    return {
        Titlebar: jest.fn().mockImplementation(() => {
            return {};
        }),
        Color: {
            fromHex: jest.fn(),
        },
    };
});

class MatSnackBarStub {
    open(): void {}
}

describe('AppComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AppComponent, MockPipe(TranslatePipe)],
                providers: [
                    { provide: ElectronService, useClass: ElectronServiceStub },
                    { provide: MatSnackBar, useClass: MatSnackBarStub },
                ],
                imports: [
                    MockModule(MatSnackBarModule),
                    MockModule(NgxWhatsNewModule),
                    RouterTestingModule,
                    TranslateModule.forRoot(),
                ],
            }).compileComponents();
        })
    );

    it(
        'should create the app',
        waitForAsync(() => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        })
    );
});
