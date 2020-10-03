import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tag-extendable-array',
  templateUrl: './tag-extendable-array.component.html',
  styleUrls: ['./tag-extendable-array.component.css']
})
export class TagExtendableArrayComponent {
  // Taken with changes from here: https://ng.ant.design/components/select/en#components-select-demo-tags

  tags = [];
  inputVisible = false;
  inputValue = '';
  tagColor = 'geekblue'
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  @Input() addMsg = ' New Tag'
  @Input() maxLen;
  @Output() tagArray = new EventEmitter<string[]>();

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
    this.tagArray.emit(this.tags);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
      this.tagArray.emit(this.tags);
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
}
