import { Component, EventEmitter, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent {
    // From: https://ng.ant.design/components/upload/en

    loading = false;
    imageUri?: string;

    @Output() imageUploaded = new EventEmitter<string>();

    constructor(private msg: NzMessageService) {}

    beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
        return new Observable((observer: Observer<boolean>) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                this.msg.error('You can only upload JPG file!');
                observer.complete();
                return;
            }
            const isLt2M = file.size! / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.msg.error('Image must smaller than 2MB!');
                observer.complete();
                return;
            }
            observer.next(isJpgOrPng && isLt2M);
            observer.complete();
        });
    };

    private getBase64(img: File, callback: (img: string) => void): void {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result!.toString()));
        reader.readAsDataURL(img);
    }

    handleChange(info: { file: NzUploadFile }): void {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file!.originFileObj!, (img: string) => {
                    this.loading = false;
                    this.imageUri = img;
                    this.imageUploaded.emit(img);
                });
                break;
            case 'error':
                this.msg.error('Network error');
                this.loading = false;
                break;
        }
    }
}
